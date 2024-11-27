# Challenge 5: Find ΩMEGA!

The malicious AI, ΩMEGA, is cornered. After inspecting all the healthy nodes in the network during the previous challenge, we’ve detected that ΩMEGA has hidden in one of them!

We don’t know exactly which one, but we do know the rules ΩMEGA followed to hide.

We need to find the numbers that meet the following conditions:

- The number is prime.
- The sum of its digits is also a prime number.

Your task is to write a program to determine how many numbers in the list meet these conditions and identify the **third number** that satisfies them as the list is traversed in ascending order.

**Example:**

If the list were: **11,12,13,14**

```
11: Is prime. 1 + 1 = 2, which is prime. → Satisfies.
12: Not prime. → Does not satisfy.
13: Is prime. 1 + 3 = 4, which is not prime. → Does not satisfy.
14: Not prime. → Does not satisfy.
```

In this case, only one number satisfies the conditions, and that number would be the first (11).

**What do you need to do?**

Analyze the list of nodes from the previous challenge’s result and identify all the numbers that satisfy the conditions.
Determine how many numbers satisfy the conditions.
Identify the third number that satisfies the conditions as the list is traversed in ascending order.

**Answer:**

Submit the total number of numbers that satisfy the conditions and the third number found, separated by a hyphen. For example, if there are 4 numbers that satisfy and the third number is 11, you would submit: **submit 4-11**
