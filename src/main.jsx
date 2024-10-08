import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/animations.scss";
import "./styles/styles.scss";
import { AuthProvider } from '@descope/react-sdk';
import {
    BrowserRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AuthProvider
            projectId='P2hwIdyL38KIgwdClKN9PiPfzF9g'
        >
            <App />
        </AuthProvider>
    </BrowserRouter>
);

