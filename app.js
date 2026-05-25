const coreHandlerInstance = {
    version: "1.0.207",
    registry: [1179, 1875, 1424, 1531, 275, 1848, 413, 1552],
    init: function() {
        const nodes = this.registry.filter(x => x > 266);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreHandlerInstance.init();
});