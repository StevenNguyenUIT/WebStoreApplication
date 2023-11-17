package com.webstore.service;

import com.webstore.domain.Order;
import com.webstore.repository.OrderRepository;
import com.webstore.service.adapter.OrderAdapter;
import com.webstore.service.dto.OrderDTO;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    OrderRepository repo;

    public OrderDTO createOrder(OrderDTO orderDTO) {
        String generatedString = RandomStringUtils.randomAlphabetic(10);
        orderDTO.setOrderId(generatedString);
        orderDTO.setStatus("PLACED");
        orderDTO.setDate(new Date());
        repo.save(OrderAdapter.toObj(orderDTO));
        return orderDTO;
    }

    public void updateOrderStatus(String orderId, String status) {
        Order order = repo.findByOrderId(orderId);
        if (order != null) {
            order.setStatus(status);
            repo.save(order);
        }
    }


    public OrderDTO getOrderDetail(String orderId) {
        return OrderAdapter.toDto(repo.findByOrderId(orderId));
    }

    public List<OrderDTO> getAllOrders() {
        List<Order> list = repo.findAll();
        List<OrderDTO> dtoList = new ArrayList<>();
        if (list != null && !list.isEmpty()) {
            for (Order o: list) {
                dtoList.add(OrderAdapter.toDto(o));
            }
        }
        return dtoList;
    }

    public List<OrderDTO> findOrdersByStatus(String status) {
        List<Order> list = repo.findOrdersByStatus(status);
        List<OrderDTO> dtoList = new ArrayList<>();
        if (list != null && !list.isEmpty()) {
            for (Order o: list) {
                dtoList.add(OrderAdapter.toDto(o));
            }
        }
        return dtoList;
    }
}
