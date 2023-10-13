const generateEmptyFunction = () => function () {
}
const generateEmptyAsyncFunction = () => async function () {
}
window.canva = {
    CanvaError: class {
    },
    authentication: {},
    content: {},
    dataConsumer: {},
    designInteraction: {
        addNativeElement: generateEmptyAsyncFunction(),
        addPage: generateEmptyFunction(),
        getCurrentPageContext: generateEmptyFunction(),
        getDefaultPageDimensions: async () => {
        },
        addAudioTrack: generateEmptyFunction(),
        initAppElement: generateEmptyFunction(),
        hd: [],
        onAppElementChange: generateEmptyFunction(),
        onAppElementDrop: generateEmptyFunction(),
        registerRenderAppElement: generateEmptyFunction(),
        selection: {
            registerOnChange: generateEmptyFunction(),
            setContent: generateEmptyFunction(),
            updateAllContent: generateEmptyFunction(),
        },
        selection2: {
            registerOnChange: generateEmptyFunction(),
        },
        setCurrentPageBackground: generateEmptyFunction(),
    },
    dragAndDrop: {
        makeDraggable: generateEmptyFunction(),
        startDrag: generateEmptyFunction(),
    },
    export: {
        requestExport: generateEmptyFunction(),
    },
    fetch: {
        post: generateEmptyFunction(),
        get: generateEmptyFunction(),
    },
    generation: {
        requestReportContent: generateEmptyFunction(),
        requestUpgrade: generateEmptyFunction(),
        generateImages: generateEmptyFunction(),
        getQuota: generateEmptyFunction(),
    },
    interactiveElement: {
        onAppElementChange: generateEmptyFunction(),
    },
    platform: {
        requestOpenExternalUrl: generateEmptyFunction(),
    },
    skeleton: {},
}

// @ts-ignore
window.__canva__ = {
    uiKit: {
        getUiContext: async function(){
            return Promise.resolve({})
        },
        onUiContextChange: generateEmptyAsyncFunction(),
    }
}