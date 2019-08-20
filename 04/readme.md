# 练习

1. 使用bootstrap的样式编写一个表格组件

```html

1. column 设置表头的
[
    {
        title: "#",
        key: "id",
    },
    {
        title: "First Name",
        key: "firstName"
    },
    {
        title: "LastName",
        key: "lastName"
    }
]

2. data 设置标题的数据

[
    {
        id: "1",
        firstName: "Mark",
        lastName: "Otto"
    },
    {
        id: "2",
        firstName: "Jacob",
        lastName: "Thornton"
    },
    {
        id: "3",
        firstName: "Larry",
        lastName: "the Bird"
    }
]

<Table 
    column="[]",
    data="[]"
/>
```

2. 使用bootstrap 做一个分页组件

```html

<Pagination :value="2" />
```