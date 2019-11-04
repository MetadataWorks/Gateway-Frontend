const context = {
    newsItems: {
        newsItemOne: {
            image: "TestImage",
            description: "TestDescription",
            readMore: "http://localhost:3000"
        },
        newsItemTwo: {
            image: "",
            description: "Test",
            readMore: "http://localhost:3000"
        },
        newsItemThree: {
            image: "",
            description: "Test",
            readMore: "http://localhost:3000"
        }
    },
    state: {
        counter: 0
    },
    images: {
        logoHDR: "test"
    },
    textItems: { searchHeader: "TestSearchHeader" },
    counterFunc: jest.fn()
};

export default context;
