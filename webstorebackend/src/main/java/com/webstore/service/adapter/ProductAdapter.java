package com.webstore.service.adapter;

import com.webstore.domain.Product;
import com.webstore.service.dto.ProductDTO;

public class ProductAdapter {

    public static Product toObj(ProductDTO dto) {
        //TODO
        return new Product();
    }
    public static ProductDTO toDto(Product obj) {
        //TODO
        return new ProductDTO();
    }
}
