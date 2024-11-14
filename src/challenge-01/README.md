# Challenge 1: Get Access to the Terminal!

We’re in trouble. **The ΩMEGA AI is out of control**. Luckily, I managed to set up a password to prevent it from accessing this terminal. The system isn’t complicated, but it should buy us enough time.

I’ll give you a list of numbers, and next to each one, the movements you need to make on these numbers. Imagine those number locks with combinations.

<div align="center">
  <img src="https://github.com/user-attachments/assets/c1fd4748-3ea8-462c-ad0d-9fc2f5112752" alt="Lock" width="300" />
</div>

The number on the left is the initial combination, and the strings of text to the right are the movements you need to make.

We always start from the first number on the left. The movements are:

```
R (Right) move to the next digit
L (Left) move to the previous digit
U (Up) increment that digit
D (Down) decrement the current digit
```

If we’re at the far-right and receive an **R**, we go back to the first digit. If we get **L** while on the first digit, we go to the last one. If the current digit is **9** and we get a **U**, it turns into **0**. And if it’s **D** and the digit is **0**, it becomes **9**.

Got it? It’s really important that you understand! Here, I’ll leave a few examples:

```
000 URURD -> 119
1111 UUURUUU -> 4411
9999 LULULULD -> 8000
```

Get it? Alright, to unlock the terminal, you need to submit the number after executing this combination:

```
528934712834 URDURUDRUDLLLLUUDDUDUDUDLLRRRR
```

Hurry! We don’t have much time!
