import React from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';
import logo from '../assets/img/logo-dark.svg';

/**
 * Dashboard Footer
 *
 * @param  {Object}    props
 * @param  {String}    props.current      Current view, `edit`, `split`, or `preview`.
 * @param  {Function}  props.handleChange Handles changing view in parent Editor component.
 * @return {Component}
 */
const DashboardFooter = props => {
    return (
        <div className="dashboard-footer">
            <div className="item">
                <img src={logo} className="site-logo" />
            </div>
            <div className="item">
                <span className="copyright">
                    &copy; {new Date().getFullYear()} {'<'}justwrite.app{'>'}{' '}
                    &mdash; A Project by{' '}
                    <a href="https://jasonbobich.com" target="_blank">
                        Jason Bobich
                    </a>.
                </span>
            </div>
            <div className="item">
                <ul>
                    <li>
                        <a href="">Help</a>
                    </li>
                    <li>
                        <a href="">Privacy</a>
                    </li>
                    <li className="has-icon">
                        <a
                            href="https://github.com/themeblvd/just-write"
                            target="_blank"
                        >
                            <FontAwesomeIcon style="fab" icon="github" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardFooter;