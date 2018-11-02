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
Component.prototype.doEvent = function (event, arg) {
    var me = this;
    $(this.events[event]).each(function () {
        this.call(me, arg);
    })
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
    return {};
};
Component.prototype.hide = function () {
    if (this.container) {
        this.container.hide();
    }
}
Component.prototype.show = function () {
    if (this.container) {
        this.container.show();
    }
}
Component.prototype.removeProperty = function (name) {
    var indexOf = this.properties.indexOf(this.getProperty(name));
    if (indexOf !== -1) {
        this.properties.splice(indexOf, 1);
    }
};
Component.prototype.setProperty = function (property, value, replace) {
    //console.log(property, value, this.getProperties());
    var prop = this.getProperty(property);
    var me = this;

    if (me.changed) {
        return;
    }
    if (!prop) {
        console.error("设置属性失败,属性不存在！", me, property, value);
        return;
    }
    if (prop.value === value && !replace) {
        return;
    }
    prop.value = value;

    if (property === 'size' || property === 'width' || property === 'mdSize' || property === 'height') {
        this.resize();
        return;
    }
    if (property === "type") {
        // if (!prop.prototype) {
        //     return;
        // }
        // if (!prop.value && prop.prototype.type === value) {
        //     return;
        // }
        var NewComponent = componentRepo.supportComponents[value];
        if (NewComponent) {
            var comp = new NewComponent(me.id);
            comp.newComponent = true;
            var container = comp.render();
            $(me.properties).each(function () {
                if (this.id === 'type') {
                    return;
                }
                comp.setProperty(this.id, this.value);
            });
            me.container.replaceWith(container);
            me.doEvent("typeChanged", comp);
            me.changed = true;
        }
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
    if (this.newComponent) {
        this.container = newFunc();
        this.container.attr("hs-id", this.id);
        this.newComponent = false;
    }
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
    var size = this.getProperty("width").value || this.getProperty("size").value;
    var height = this.getProperty("height").value;
    if (this.container) {
        this.container.removeClass();
        this.container.addClass("mini-col-" + (size || 4));
        this.container.addClass("form-component");
        this.container.removeAttr("style");
        if (this.setWidth) {
            this.setWidth(size);
        }
        if (this.setHeight) {
            this.setHeight(height);
        } else {
            if (height && height > 1) {
                this.container.css("height", height + "px");
            } else {
                this.container.css("height", "");
            }
        }
        this.doEvent("resize", size, height);
        mini.layout();
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
componentRepo.supportComponentsList = [];

componentRepo.registerComponent = function (type, component) {
    component.prototype.type = type;

    componentRepo.supportComponents[type] = component;
    componentRepo.supportComponentsList.push(component);
};
