import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { Link } from "@inertiajs/inertia-react";

createInertiaApp({
    resolve: (name) => import(`./Pages/${name}`),
    setup({ el, App, props }) {
        // console.log(props);
        render(<App {...props} />, el);
    },
});

InertiaProgress.init();