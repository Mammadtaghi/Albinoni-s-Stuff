import { Products } from "./../Models/productModel.js";

// Post

export async function CreateNewProduct(req,res) {
    try {
        const { title, price, categories, discount=0, inStock=0 } = req.body
        const newProduct = new Products({
            title:title,
            price:price,
            categories:categories,
            discount:discount,
            inStock:inStock
        })
    
        await newProduct.save()
    
        res.status(200).send("Product created!")
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// Get

export async function GetAllProducts(req,res) {
    try {
        const products = await Products.find()

        res.status(200).send(products)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

export async function GetProductByID(req,res) {
    try {
        const { id } = req.body

        const product = await Products.findById(id)

        res.status(200).send(product)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// Delete

export async function DeleteProductByID(req,res) {
    try {
        const { id } = req.body

        const product = await Products.findByIdAndDelete(id)

        res.status(200).send("Product deleted!")
    } catch (error) {
        res.status(500).json({message:error})
    }
}

export async function DeleteProductByTitle(req,res) {
    try {
        const { title } = req.body

        const product = await Products.findOneAndDelete({title:title})

        res.status(200).send("Product deleted!")
    } catch (error) {
        res.status(500).json({message:error})
    }
}

// Put

export async function UpdateProductPrice(req,res) {
    try {
        const { newPrice } = req.body

        const updatedProduct = await Products.findOneAndUpdate({price:newPrice})

        res.status(200).send("Product price updated!")
    } catch (error) {
        res.status(500).json({message:error})
    }
}

export async function UpdateProductDiscount(req,res) {
    try {
        const { newDiscount } = req.body

        const updatedProduct = await Products.findOneAndUpdate({discount:newDiscount})

        res.status(200).send("Product discount updated!")
    } catch (error) {
        res.status(500).json({message:error})
    }
}
