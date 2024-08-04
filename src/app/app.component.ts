import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import App from "../extension/app";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	title = "data-extension";

	getData() {
		new App().getData();
	}
}
