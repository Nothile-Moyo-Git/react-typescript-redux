import "./Layout.scss";

const Layout = (props :  any) => {

    return (
        <main className="layout">
            <div className="layout__backdrop"/>

            <section className="layout__content">
                {props.children}
            </section>
        </main>
    );
};

export default Layout;

