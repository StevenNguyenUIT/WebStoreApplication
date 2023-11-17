package com.webstore.web;

import com.webstore.service.ProductService;
import com.webstore.service.dto.ProductDTO;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {
    @Autowired
    ProductService service;

    @GetMapping("/api/products")
    public ResponseEntity<?> getAllProducts() {
        List<ProductDTO> data = service.getAllProducts();
        return new ResponseEntity<>(data, HttpStatus.OK);
    }
    @GetMapping("/api/products/{productNumber}")
    public ResponseEntity<?> getProductDetail(@PathVariable("productNumber") String productNumber) {
        ProductDTO data = service.getProductDetail(productNumber);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }
    @GetMapping("/api/products/search")
    public ResponseEntity<?> searchProductsByName(@RequestParam String name) {
        List<ProductDTO> data = service.searchProductsByName(name);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @PostMapping("/api/products")
    public ResponseEntity<?> createProduct(@RequestBody @Valid ProductDTO productDTO) {
        ProductDTO data = service.createProduct(productDTO);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    @DeleteMapping("/api/products/{productNumber}")
    public ResponseEntity<?> removeProduct(@PathVariable("productNumber") String productNumber) {
        service.removeProduct(productNumber);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);//204
    }

    @PutMapping("/api/products/{productNumber}")
    public ResponseEntity<?> updateProduct(@PathVariable("productNumber") String productNumber,
                                           @RequestBody @Valid ProductDTO productDTO) {
        service.updateProduct(productDTO);
        return new ResponseEntity<>(productDTO, HttpStatus.OK);
    }

}
