import { Injectable } from "@angular/core";
import { AppLocations } from "./models";
import { Router } from "@angular/router";
import { APP_APPERANCE_SERVICE } from "./services/apperance.service";
import { APP_STATE_SERVICE } from "./services/state.service";
import { APP_STORAGE_SERVICE } from "./services/storage.service";

@Injectable()
export class APP_SERVICE {
    constructor(
        private ROUTER: Router,
        public APPERANCE: APP_APPERANCE_SERVICE,
        public STATE: APP_STATE_SERVICE,
        public STORAGE: APP_STORAGE_SERVICE
    ) { }

    startApp() {
        return new Promise(async (resolve) => {
            //? this.APPERANCE.restart()
            await this.STORAGE.init()
            await this.navigate('home')
        })
    }

    async navigate(location: AppLocations, options?: any) {
        switch(location) {
            case "home":
                await this.ROUTER.navigateByUrl("/home");
                this.APPERANCE.setNavBarIconOptions(null, 'add', 'settings');
                break;
            case "recipes_list":
                if (options.sub_category_id) {
                    await this.ROUTER.navigate(["/recipes_list"], {queryParams: {sub_category_id: options.sub_category_id}});
                } else {
                    await this.ROUTER.navigateByUrl("/recipes_list");
                }
                this.APPERANCE.setNavBarIconOptions("back", 'add', 'settings');
                break;
            case "recipe":
                await this.ROUTER.navigateByUrl("/recipe");
                this.APPERANCE.setNavBarIconOptions("back", null, 'edit');
                break;
        }
    }
}