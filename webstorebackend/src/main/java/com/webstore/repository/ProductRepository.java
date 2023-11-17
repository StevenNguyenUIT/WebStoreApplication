package com.webstore.repository;

import com.webstore.domain.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {
    Product findByProductNumber(String productNumber);
    Product findByName(String productName);//find by exact name, return a product
    List<Product> findAllByName(String productName);// return a list of products same name
    void removeByProductNumber(String productNumber);
}
