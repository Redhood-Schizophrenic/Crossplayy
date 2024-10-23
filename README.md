# API Requests


----------------------------------------------------------------------------------

## Devices Category

###### 1. Add Devices Type
/api/device_types/add
`POST`
```json
{
    "category_name": "Playstation"
}
```

###### 2. Get Devices Type 
/api/device_types/fetch
`GET`


###### 3. Edit Details
/api/devices/fetch
`PUT`
```json
{
    "category_id": "a60065c3-29c8-4181-8d54-1c7c72551412",
    "category_name": "Playstation"
}
```

----------------------------------------------------------------------------------

## Devices

###### 1. Add Devices
/api/device_types/add
`POST`
```json
{
    "category_id": "56d7df8d-9543-4a6f-9d69-e8c52fa30688",
    "device_name": "PC-1"
}
```

###### 2. Get Devices 
/api/devices/fetch
`GET`


###### 3. Edit Details
/api/devices/edit/details
`PUT`
```json
{
    "device_id": "e645018c-0783-4bb5-9887-45d01ec4a675",
    "device_name": "PS-1"
}
```

###### 4. Edit Status
/api/devices/edit/status
`PUT`
```json
{
    "device_id": "e645018c-0783-4bb5-9887-45d01ec4a675",
    "status": "Booked"
}
```


----------------------------------------------------------------------------------

## Gaming Sessions

###### 1. Add Session 
/api/gaming_session/add
`POST`
```json
{
    "customer_name": "User",
    "customer_contact": "1234567890",
    "device_name": "PC-1",
    "date": "23rd Oct 2024",
    "hours": 2,
    "in_time": "10 am",
    "out_time": "12 am",
    "discount": "Happy Hours",
    "no_of_players": 3,
    "snacks": 2,
    "water_bottles": 1
}
```
discount :- None / Happy Hours
snacks & water_bottles quantities

###### 2. Update Snacks  
/api/gaming_session/snacks
`PUT`
```json
{
    "session_id": "5b952138-d4aa-4701-bb19-57d079c6607c",
    "snacks": 3,
    "water_bottles": 2
}
```

###### 3. Session Extend
/api/gaming_session/extend
`PUT`
```json
{
    "session_id": "5b952138-d4aa-4701-bb19-57d079c6607c",
    "minutes": 30,
    "out_time": "11:30 am"
}
```

###### 4. Close Session
/api/gaming_session/close
`PUT`
```json
{
    "session_id": "5b952138-d4aa-4701-bb19-57d079c6607c"
}
```
----------------------------------------------------------------------------------
