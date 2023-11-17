package com.webstore.service;

import com.webstore.domain.Product;
import com.webstore.repository.ProductRepository;
import com.webstore.service.adapter.ProductAdapter;
import com.webstore.service.dto.ProductDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductRepository repository;

    public ProductDTO createProduct(ProductDTO productDTO) {
        // TODO

        return null;
    }
    public ProductDTO viewProductDetail(String productNumber) {
        // TODO

        return null;
    }
    public List<ProductDTO> getAllProducts() {
        // TODO

        return null;
    }
    public List<ProductDTO> searchProductsByName(String name) {
        // TODO

        return new ArrayList<ProductDTO>();
    }
    public void updateProduct(ProductDTO productDTO) {
        Product product = ProductAdapter.toObj(productDTO);
        repository.save(product);
    }

    public void removeProduct(String productNumber) {
        repository.deleteById(productNumber);
    }

    public ProductDTO getProductDetail(String productNumber) {
        Product product = repository.findByProductNumber(productNumber);
        return ProductAdapter.toDto(product);
    }
}
