package com.dugganjack.taskmanager;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

@SpringBootTest
@AutoConfigureMockMvc
public class TaskControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testCreateTask() throws Exception {

        String taskJsonString = "{\"title\":\"Test Title\",\"description\":\"Test Description\",\"status\":\"TO_DO\",\"priority\":\"HIGH\",\"dueDate\":\"2024-10-31T23:59:59\"}";

        ResultActions result = mockMvc.perform(post("/tasks").contentType(MediaType.APPLICATION_JSON).content(taskJsonString));

        result.andExpect(status().isOk());
        
    }
}
