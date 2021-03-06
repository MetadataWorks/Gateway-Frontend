import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../HOC/AppContext/AppContext.js";
import { useMutation } from "@apollo/react-hooks";
import { SEARCH_SAVE } from "../../queries/queries.js";

import { Modal, TextInput } from "carbon-components-react";

const textItems = {
    save: "Save",
    cancel: "Cancel",
    saveSearch: "Save search",
    rename: "Rename",
    error: {
        tooLong: "Name must be less than 100 characters long"
    },
    aria: {
        renameAndSaveSearch: "Rename and save search."
    },
    enterTextHere: "Enter text here..."
};

const SaveSearchModal = () => {
    const appContext = useContext(AppContext);
    const [saveSearch, { loading, error, data }] = useMutation(SEARCH_SAVE);

    const searchTerm = appContext.search.term;
    const setSearchSaved = appContext.setSearchSaved;

    const modalOpen = appContext.searchSaveModalOpen;
    const setModalOpen = appContext.setSearchSaveModalOpen;
    const searchSavedState = appContext.searchSavedState;
    const setSearchSavedState = appContext.setSearchSavedState;

    const [rename, setRename] = useState("");
    const [renameInvalid, setRenameInvalid] = useState(false);

    let saveVariables = {
        searchAuditId: appContext.search.latestSearchAuditLogId,
        userId: appContext.userId
    };

    useEffect(() => {
        if (loading !== searchSavedState.loading || error !== searchSavedState.error)
            setSearchSavedState({
                ...searchSavedState,
                loading,
                error
            });
    }, [loading, error, searchSavedState, setSearchSavedState]);

    const closeModal = () => {
        setModalOpen(false);
        setRename("");
        renameInvalid && setRenameInvalid(false);
    };

    const validateModalInput = e => {
        setRename(e.target.value);
        if (e.target.value.length < 100) {
            renameInvalid && setRenameInvalid(false);
        } else {
            setRenameInvalid(true);
        }
    };

    const submitModal = () => {
        rename && (saveVariables.name = rename);
        saveSearch({ variables: saveVariables });
        setSearchSavedState({
            state: false,
            status: null,
            message: null
        });
        setSearchSaved(true);
        closeModal();
        return true;
    };

    useEffect(() => {
        if (data && data.searchSave.status === "403") {
            setSearchSavedState({
                state: true,
                ...data.searchSave
            });
            setSearchSaved(false);
        }
    }, [data, setSearchSaved, setSearchSavedState]);

    return (
        <Modal
            id="save-search-modal"
            open={modalOpen}
            onRequestSubmit={submitModal}
            onSecondarySubmit={closeModal}
            onRequestClose={closeModal}
            modalLabel={textItems.saveSearch}
            modalHeading={searchTerm}
            primaryButtonText={textItems.save}
            secondaryButtonText={textItems.cancel}
            primaryButtonDisabled={!(searchTerm || rename) || renameInvalid}
            aria-label={textItems.aria.renameAndSaveSearch}
        >
            <TextInput
                id="save-search-rename"
                labelText={textItems.rename}
                value={rename}
                placeholder={searchTerm || textItems.enterTextHere}
                onChange={e => validateModalInput(e)}
                invalid={renameInvalid}
                invalidText={textItems.error.tooLong}
            />
        </Modal>
    );
};

export default SaveSearchModal;
