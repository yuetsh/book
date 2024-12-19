# Python 小抄

> 抄抄抄

1. 输出保留两位小数

```py
a = 10.2980
print("%.2f" % a)
```


2. 输入一个整数

比如输入128

```py
a=int(input())
```

得到变量a就是整数128

3. 输入两个整数，用空格隔开

比如输入 10 20

```py
n=input().split()
a=int(n[0])
b=int(n[1])
```

得到变量a就是整数10，变量b就是整数20

4. 输入文字，用空格隔开

比如输入 iPhone Huawei Xiaomi

```py
n=input().split()
a=n[0]
b=n[1]
c=n[2]
```

得到变量a就是iPhone，变量b就是Huawei，变量c就是Xiaomi
