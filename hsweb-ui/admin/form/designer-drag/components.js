var Component = function () {
    this.config = {};
    this.events = {};
    this.properties = [];
};
Component.prototype.on = function (event, listener) {
    if (!this.events[event]) {
        this.events[event] = [];
    }
    this.events[event].push(listener);
    return this;
};
Component.prototype.un = function (event) {
    this.events[event] = [];
    return this;
};
Component.prototype.getProperties = function () {
    return this.properties;
};
Component.prototype.getProperty = function (name) {
    var props = this.properties;
    //   console.log(props);
    for (var i = 0; i < props.length; i++) {
        // console.log(props[i].id,name);
        if (props[i].id === name) {
            return props[i];
        }
    }
    return null;
};
Component.prototype.removeProperty = function (name) {
    var indexOf = this.properties.indexOf(this.getProperty(name));
    if (indexOf !== -1) {
        this.properties.splice(indexOf, 1);
    }
};
Component.prototype.setProperty = function (property, value) {
    //console.log(property, value, this.getProperties());
    var prop = this.getProperty(property);
    if (!prop) {
        console.error(property, value);
        return;
    }
    // if (prop.value === value) {
    //     return;
    // }
    prop.value = value;
    if (property === 'size' || property === 'mdSize') {
        this.resize();
        return;
    }
    if (this.events["propertiesChanged"]) {
        $(this.events["propertiesChanged"]).each(function () {
            var event = this;
            event(property, value);
        });
    }
    return this;
};
Component.prototype.setProperties = function (properties) {
    var me = this;
    for (var i in properties) {
        me.setProperty(i, properties[i]);
    }
    return this;
};
Component.prototype.render = function () {

};
Component.prototype.bind = function (el) {
    $(el).children().remove();

    $(el).replaceWith(this.render());
};
Component.prototype.getContainer = function (newFunc) {
    var container;
    if (!this.container) {
        if (this.id) {
            container = $("[hs-id='" + this.id + "']");
            if (container.length === 0) {
                this.container = container = newFunc();
                this.container.attr("hs-id", this.id);
            }
        }
    } else {
        return this.container;
    }
    return container;
};
Component.prototype.resize = function () {
    var size = this.getProperty("size");
    if (size) {
        size = size.value;
    }
    if (this.container) {
        this.container.removeClass();
        this.container.addClass("mini-col-" + (size ? size : 4));
    }
};
Component.prototype.init = function () {
};
Component.prototype.remove = function () {
    this.getContainer(function () {
        return $();
    }).remove();
};

var componentRepo = {};
componentRepo.supportComponents = {};

componentRepo.registerComponent = function (type, component) {
    componentRepo.supportComponents[type] = component;
};
