import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import App from "./App.tsx";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
			<Toaster richColors />
		</Provider>
	</BrowserRouter>,
);
