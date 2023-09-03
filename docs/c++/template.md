---
id: template
title: Template
---
---

## C++模板

模板是C++的一个工具，是一个对类型进行参数化的方式，通常我们使用函数模板或类模板，函数模板针对仅参数类型不同的函数，而类模板针对仅数据成员和成员函数类型不同的类。
一个简单的例子就是我们在初学C语言时，大多都写过交换两个数字的函数，若两个数都是int类型，那对于float类型的我们又要去重写另一个函数，因此模板的出现，就是为了让代码与类型无关。  
ps：模板只能声明或定义在全局，命名空间或类范围内进行

## 函数模板

### 函数模板的格式为
```
template<class 形参名，形参名，......>
返回类型 函数名（函数参数）
{
    /* code */     
}
```

其中，常见的是用typename代替class，此处二者没有区别  
尖括号里的参数叫做模板形参，不能为空，举个栗子：

```
template<typename T>
void swap(T &a,T &b)
{}
```
这里如果我们的a,b是int类型的，比如a=1,b=2,那么在调用swap(a,b)时，T表示的就是int，即swap(int &a,int &b),而若ab是float类型，则此时模板函数变为swap(float &a, float &b),因此函数功能与参数类型无关

#### 实例
```
template<typename T>
void swap(T &x, T &y)
{
    T temp = x;
    x = y;
    y = temp;
}
```
定义好函数后，在主函数里调用
```
int main()
{
    int a = 1,b=2;
    swap(a,b);
}
```
此时编译器会自动生成一个void swap(int &,int &)的函数，而
```
int main()
{
    float a = 1,b=2;
    swap(a,b);
}
```
编译器会自动生成一个void swap(float &,float &)的函数  
使用函数模板同样可以有函数重载，只要其形参表不同或类型参数表不同即可，不过多赘述


## 类模板
### 类模板格式为
```
template<class 形参名，class 形参名，......>
class 类名
{
    /* code */
};
```

用类模板定义对象则：
```
类模板名<真实类型参数表> 对象名（构造函数实参表）
```

依然举栗子理解：
```
template <typename T1, typename T2>
class Pair
{
public:
    Pair(T1 k, T2 v):m_key(k),m_value(v) {};
    bool operator < (const Pair<T1,T2> & p) const;
private:
    T1 m_key;
    T2 m_value;
};


template <typename T1, typename T2>
bool Pair<T1,T2>::operator < (const Pair<T1,T2> &p) const
{
    return m_value < p.m_value;
}

int main()
{
    Pair<string,int> Astudent("Jay",20); 
    Pair<string,int> Bstudent("Tom",21);

    cout << (Astudent < Bstudent) << endl;

    return 0;
}
```

