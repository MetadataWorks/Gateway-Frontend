import React, { useContext, useEffect } from "react";
import {
    AccordionBlock,
    AccordionElement,
    // DateSelector,
    // DateInput,
    FilterButton
} from "../../../styles/carbonComponents.js";
// import AppliedFilter from "../appliedFilter/appliedFilter.js";
import Filter from "../filter/filter.js";
import { FilterBlockTitle } from "../../../styles/styles.js";

import { AppContext } from "../../../HOC/AppContext/AppContext.js";

import { useLazyQuery } from "@apollo/react-hooks";
import { GET_FILTER_VALUES } from "../../../queries/queries.js";

const FilterMenu = () => {
    const appContext = useContext(AppContext);
    const activeFilter = appContext.activeFilter;
    const modalVisibility = appContext.state.modalVisibility;
    const searchTerm = appContext.search.term;
    const newFilterObject = appContext.newFilterObject;
    const setNewFilterObject = appContext.setNewFilterObject;
    const filterString = appContext.filterString;
    const setFilterString = appContext.setFilterString;

    const [getFilterValues, { loading, error, data, refetch, called }] = useLazyQuery(GET_FILTER_VALUES, {
        notifyOnNetworkStatusChange: true
    });

    useEffect(() => {
        modalVisibility && appContext.setFilterLocation();
    });

    useEffect(() => {
        if (searchTerm !== null) {
            called ? refetch() : getFilterValues();
        }
    }, [searchTerm, called, refetch, getFilterValues]);

    useEffect(() => {
        if (data) {
            let newFilterObject = {};
            data.hdrFilterValues.data.forEach(filter => {
                newFilterObject[filter.fieldName] = {};
                filter.fieldValues.forEach((value, i) => {
                    newFilterObject[filter.fieldName][i] = {
                        value,
                        checked: false,
                        applied: false
                    };
                });
            });
            appContext.setNewFilterObject(newFilterObject);
        }
    }, [data]);

    useEffect(() => {
        let finalFilterString = "";
        let filterApplied = false;
        Object.keys(newFilterObject).forEach(filterKey => {
            let filterString = "";
            const valueState = newFilterObject[filterKey];
            Object.keys(valueState).forEach(valueKey => {
                if (valueState[valueKey].applied) {
                    filterString += `${filterApplied ? "&" : "?"}${filterKey}=${valueState[valueKey].value}`;
                    filterApplied = true;
                }
            });
            finalFilterString += filterString;
        });
        setFilterString(finalFilterString);
        console.log("appliedFilters:", finalFilterString);
    }, [newFilterObject, setNewFilterObject, setFilterString]);

    const handleChange = (filter, valueIndex) => {
        const filterValue = newFilterObject[filter][valueIndex];

        setNewFilterObject({
            ...newFilterObject,
            [filter]: {
                ...newFilterObject[filter],
                [valueIndex]: {
                    ...filterValue,
                    checked: !filterValue.checked
                }
            }
        });
    };

    const handleSubmit = filter => {
        let filterValues = Object.keys(newFilterObject[filter]).map(valueIndex => ({
            ...newFilterObject[filter][valueIndex],
            applied: newFilterObject[filter][valueIndex].checked
        }));

        setNewFilterObject({
            ...newFilterObject,
            [filter]: {
                ...filterValues
            }
        });
    };

    const filterElement = (filterKey, filterValues, i) => {
        const filterTitle = filterKey.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());

        return (
            <AccordionElement
                key={`filterItem-${i}`}
                title={filterTitle}
                open={
                    filterValues && Object.keys(filterValues).length > 4 && !modalVisibility
                        ? undefined
                        : activeFilter === i
                }
                modal={filterValues && Object.keys(filterValues).length > 4 ? "true" : "false"}
                onHeadingClick={() => {
                    if (filterValues && Object.keys(filterValues).length > 4) {
                        if (!modalVisibility) {
                            appContext.openFilterBox();
                        } else if (activeFilter === i) {
                            appContext.closeFilterBox();
                        }
                    } else {
                        appContext.closeFilterBox();
                    }
                    appContext.setFilterId(i);
                }}
            >
                {filterValues &&
                    (Object.keys(filterValues).length > 4 ? (
                        activeFilter === i && modalVisibility && <div id="filter-expanded" ref={appContext.itemRef} />
                    ) : (
                        <form>
                            {/* TODO: Implement applied filters */}
                            {/* <AppliedFilter /> */}
                            {Object.keys(filterValues).map((valueIndex, i) => (
                                <Filter
                                    key={`resultCard-${i}`}
                                    title={filterValues[valueIndex].value}
                                    onChange={() => handleChange(filterKey, valueIndex)}
                                />
                            ))}

                            <FilterButton kind="primary" onClick={() => handleSubmit(filterKey)}>
                                Apply
                            </FilterButton>
                        </form>
                    ))}
            </AccordionElement>
        );
    };

    return (
        <React.Fragment>
            <AccordionBlock>
                {loading ? (
                    <div>Loading ...</div>
                ) : (
                    newFilterObject &&
                    Object.keys(newFilterObject).length > 0 && (
                        <React.Fragment>
                            <FilterBlockTitle>Filter</FilterBlockTitle>
                            {Object.keys(newFilterObject).map((filterKey, i) =>
                                filterElement(filterKey, newFilterObject[filterKey], i)
                            )}
                        </React.Fragment>
                    )
                )}
                {error && <div>Error :(</div>}
            </AccordionBlock>
        </React.Fragment>
    );
};

export default FilterMenu;
