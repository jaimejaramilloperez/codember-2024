# Challenge 2: Detecting Unauthorized Access

I think ΩMEGA is trying to break into the system. For now, it's like a baby and **is following very simple patterns** that we can detect, but it's attempting to create administrator passwords to access the terminal.

How can we detect these access attempts? It's following these patterns:

- It only uses lowercase letters and digits.
- It never uses digits after a letter (once letters appear, the password must continue with only letters).
- If it uses digits, they are always in equal or increasing order (if a 3 appears, it won’t use a smaller number afterward).
- If it uses letters, they are always in alphabetical order, equal or increasing (if a "b" appears, it can no longer use an "a," for example).

Here are some examples to help you understand:

```
1234     -> true
abc      -> true
aabbcc   -> true (repeats but always in ascending order)
112233   -> true (repeats but always in ascending order)
a123     -> false (a digit after a letter)
123abc   -> true
dbce     -> false (a "d" followed by a "b")
```

Access this [log.txt](./log.txt) file containing a list of attempts, and use a program to count how many were invalid and how many were valid. Submit the answer using the **submit** command.

For example, if there are 10 valid attempts and 5 invalid attempts, send the command **submit 10true5false**
