
function SimplePlugin() {
    return function install(openmct) {


        openmct.types.addType('hello-world2', {
            name: 'Hello World',
            description: 'An introduction object',
            creatable: true,
            cssClass: "icon-image"
        });

        openmct.objectViews.addProvider({
            name: "demo-provider",
            key: "hello-world2",
            canView: function (d) {
                return d.type === 'hello-world2';
            },
            view: function (domainObject) {
                return {
                    show: function (container) {
                        
                        container.innerHTML = `
                            <div class="d-flex justify-content-between" style="color: red"> 
                                <h1>Congratulations, this is a view of: </h1>
                                <span>${domainObject.name}</span> 
                            </div>
                            <div class="w-100 d-flex jusrify-content-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/JlJPe5qryDQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        `;
                    },
                    destroy: function (container) {
                         // Do any cleanup here (eg. event observers, etc).
                    }
                }
            }
        });

    };
}

// export default SimplePlugin;
