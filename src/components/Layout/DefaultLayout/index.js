import classNames from "classnames/bind";
import Header from "~/components/Layout/component/Header";
import Sidebar from "./Sidebar";

import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;