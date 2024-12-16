export type AppLocations = 'home' | 'recipes_list' | 'recipe'

export interface Category {
    id: string,
    name: string
}

export interface SubCategory extends Category {
    category_id: string
}

export interface Recipe {
    id: string,
    sub_category_id: string,
    name: string,
    photo_id: string,
    ingredients: Ingredient[],
    steps: Step[]
}

export interface Ingredient {
    name: string,
    amount: string
}

export interface Step {
    description: string
}

export interface Photo {
    id: string,
    photo_string: string
} 