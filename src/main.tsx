import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./App.css";
import { Toaster } from "sonner";
import App from "./App.tsx";
import { store } from "./store/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<App />
		<Toaster richColors />
	</Provider>,
);
