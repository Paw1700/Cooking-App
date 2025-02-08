import { inject, Injectable } from "@angular/core";
import { DatabaseManager } from "../util/db.driver";
import { Category, Photo, Recipe, SubCategory } from "../models";

export class DB_STORES {
    constructor(
        public category = 'category',
        public sub_categories = 'sub_categories',
        public recipes = 'recipes',
        public photos = 'photos'
    ) { }
}

@Injectable()
export class APP_STORAGE_SERVICE {
    private readonly DB = inject(DatabaseManager)
    private readonly DB_NAME = 'Cooking App Storage'
    private readonly DB_VERSION = 1
    private readonly DB_STORES = new DB_STORES()

    /**
     * It's start application data system. If failed it returns error code in reject.
     */
    init(): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            try {
                await this.DB.initDB(
                    this.DB_NAME,
                    this.DB_VERSION,
                    Object.getOwnPropertyNames(this.DB_STORES),
                    false
                );
                resolve()
            } catch (err) {
                // ! reject(new Error('DB-CONNECT-ERROR'));
                console.error(err);
                
                console.error('DB creation error!')
            }
        })
    }

    /**
     * That function deletes all application data. If failed it returns error code in reject.
     */
    reset(): Promise<void> {
        return new Promise(async (resolve, reject) => {
            try {
                this.DB.clearLS();
                await this.DB.deleteDB(this.DB_NAME);
                setTimeout(() => {
                    resolve();
                }, 500)
            } catch {
                //! reject(new Error('APP-RESET-ERROR'));
                console.error('DB reset error!')
            }
        });
    }

    getCategory(category_id: string): Promise<Category> {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await this.DB.getObject(this.DB_STORES.category, category_id))
            } catch (err) {
                // ! CREATE ERROR CODE !
                console.error('Error during get category!')
            }
        })
    }

    getAllCategories(): Promise<Category[]> {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await this.DB.getAllObject(this.DB_STORES.category))
            } catch (err) {
                // ! CREATE ERROR CODE !
                console.error(err);
                
                console.error('Error during get all categories!')
            }
        })
    }

    saveCategory(category: Category): Promise<void> {
        return new Promise(async (resolve, reject) => {
            try {
                category.id = await this.DB.GENERATE_INDEX(this.DB_STORES.category)
                // !! let generated_id = category.id !! DELETE NEW INDEX IF NECESSARY
                // !! ADD OBJECT VALIDATION !!
                await this.DB.insertObject(this.DB_STORES.category, category)
                resolve()
            } catch (err) {
                // ! CREATE ERROR CODE !
                console.error('Error during save category!')
            }
        })
    }

    updateCategory(category: Category): Promise<void> {
        return new Promise(async (resolve, reject) => {
            try {
                // !! ADD OBJECT VALIDATION !!
                await this.DB.insertObject(this.DB_STORES.category, category)
                resolve()
            } catch (err) {
                // ! CREATE ERROR CODE !
                console.error('Error during update category!')
            }
        })
    }

    getSubcategory(sub_category_id: string): Promise<SubCategory> {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await this.DB.getObject(this.DB_STORES.sub_categories, sub_category_id))
            } catch (err) {
                // ! CREATE ERROR CODE !
                console.error('Error during get subcategory!')
            }
        })
    }

    getAllSubcategories(): Promise<SubCategory[]> {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await this.DB.getAllObject(this.DB_STORES.sub_categories))
            } catch (err) {
                // ! CREATE ERROR CODE !
                console.error('Error during get all subcategories!')
            }
        })
    }

    saveSubcategory(sub_category: SubCategory): Promise<void> {
        return new Promise(async (resolve, reject) => {
            try {
                sub_category.id = await this.DB.GENERATE_INDEX(this.DB_STORES.sub_categories)
                // !! let generated_id = sub_category.id !! DELETE NEW INDEX IF NECESSARY
                // !! ADD OBJECT VALIDATION !!
                await this.DB.insertObject(this.DB_STORES.sub_categories, sub_category)
                resolve()
            } catch (err) {
                // ! CREATE ERROR CODE !
                console.error('Error during save subcategory!')
            }
        })
    }

    updateSubcategory(sub_category: SubCategory): Promise<void> {
        return new Promise(async (resolve, reject) => {
            try {
                // !! ADD OBJECT VALIDATION !!
                await this.DB.insertObject(this.DB_STORES.sub_categories, sub_category)
                resolve()
            } catch (err) {
                // ! CREATE ERROR CODE !
                console.error('Error during update subcategory!')
            }
        })
    }

    getRecipe(recipe_id: string): Promise<Recipe> {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await this.DB.getObject(this.DB_STORES.recipes, recipe_id))
            } catch (err) {
                // ! CREATE ERROR CODE !
                console.error('Error during get recipe!')
            }
        })
    }

    getAllRecipies(): Promise<Recipe[]> {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await this.DB.getAllObject(this.DB_STORES.recipes))
            } catch (err) {
                // ! CREATE ERROR CODE !
                console.error('Error during get all recipies!')
            }
        })
    }

    saveRecipe(recipe: Recipe): Promise<void> {
        return new Promise(async (resolve, reject) => {
            try {
                recipe.id = await this.DB.GENERATE_INDEX(this.DB_STORES.recipes)
                // !! let generated_id = recipe.id !! DELETE NEW INDEX IF NECESSARY
                // !! ADD OBJECT VALIDATION !!
                await this.DB.insertObject(this.DB_STORES.recipes, recipe)
                resolve()
            } catch (err) {
                // ! CREATE ERROR CODE !
                console.error('Error during save recipe!')
            }
        })
    }

    updateRecipe(recipe: Recipe): Promise<void> {
        return new Promise(async (resolve, reject) => {
            try {
                // !! ADD OBJECT VALIDATION !!
                await this.DB.insertObject(this.DB_STORES.recipes, recipe)
                resolve()
            } catch (err) {
                // ! CREATE ERROR CODE !
                console.error('Error during update recipe!')
            }
        })
    }

    getPhoto(photo_id: string): Promise<Photo> {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await this.DB.getObject(this.DB_STORES.photos, photo_id))
            } catch (err) {
                // ! CREATE ERROR CODE !
                console.error('Error during get photo!')
            }
        })
    }

    getAllPhotos(): Promise<Photo[]> {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await this.DB.getAllObject(this.DB_STORES.photos))
            } catch (err) {
                // ! CREATE ERROR CODE !
                console.error('Error during get all photos!')
            }
        })
    }

    savePhoto(photo: Photo): Promise<void> {
        return new Promise(async (resolve, reject) => {
            try {
                photo.id = await this.DB.GENERATE_INDEX(this.DB_STORES.photos)
                // !! let generated_id = photo.id !! DELETE NEW INDEX IF NECESSARY
                // !! ADD OBJECT VALIDATION !!
                await this.DB.insertObject(this.DB_STORES.photos, photo)
                resolve()
            } catch (err) {
                // ! CREATE ERROR CODE !
                console.error('Error during save photo!')
            }
        })
    }

    updatePhoto(photo: Photo): Promise<void> {
        return new Promise(async (resolve, reject) => {
            try {
                // !! ADD OBJECT VALIDATION !!        
                await this.DB.insertObject(this.DB_STORES.photos, photo)                
                resolve()            
            } catch (err) { 
                // ! CREATE ERROR CODE !
                console.error('Error during update photo!')
            }
        })
    }
}