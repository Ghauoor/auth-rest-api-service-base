# Node Rest API Documentation

This repository contains the documentation for the Node.js Rest API.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
  - [User Module](#user-module)
    - [Login](#login)
    - [Signup](#signup)
  - [Product Module](#product-module)
    - [Create Product](#create-product)
    - [Fetch All Products](#fetch-all-products)
    - [Fetch Product Detail](#fetch-product-detail)
    - [Update Product](#update-product)
    - [Remove Product](#remove-product)

## API Endpoints

### User Module

#### Login

**Endpoint:** `POST /api/v1/user/login`

API for user login.

#### Signup

**Endpoint:** `POST /api/v1/user/signup`

API for user signup.

### Product Module

#### Create Product

**Endpoint:** `POST /api/v1/product`

API for creating a new product.

#### Fetch All Products

**Endpoint:** `GET /api/v1/product`

API for fetching all products.

#### Fetch Product Detail

**Endpoint:** `GET /api/v1/product/{id}`

API for fetching details of a specific product.

#### Update Product

**Endpoint:** `PUT /api/v1/product/{id}`

API for updating a product.

#### Remove Product

**Endpoint:** `DELETE /api/v1/product/{id}`

API for removing a product.
