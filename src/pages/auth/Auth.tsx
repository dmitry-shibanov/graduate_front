import React, { PropsWithChildren } from 'react';

import './Auth.css';

const auth = (props: any) => <section className="auth-form my-5">{props.children}</section>;

export default auth;
