# Challenge 3: Following the trail of AI ΩMEGA!

The malicious AI ΩMEGA is causing trouble in the company's control system. We are tracking its trail and need to determine how many steps it took to reach the exit (either to the left or to the right).

ΩMEGA has a list of jump instructions. Each instruction indicates the number of positions it must move in that same list.

- A positive number: ΩMEGA moves forward that many positions.
- A negative number: It moves backward that many positions.
- Zero: It stays in the same position (but this counts as a movement).

**Important**: Each time ΩMEGA reads an instruction, it increases the value of that instruction by 1 after using it.

- If it finds a 2, it moves forward 2 positions, and then that instruction becomes 3.
- If it finds a 0, it stays in the same position, and then that instruction becomes 1.
- If it finds a -3, it moves back 3 positions, and then that instruction becomes -2.

Let me give you an example. In parentheses, I'll indicate the current instruction where ΩMEGA is located.

Instruction list: **1 2 4 1 -2**

```
Start: (1) 2 4 1 -2     // → ΩMEGA starts at position 0
Step 1:  2 (2) 4 1 -2   // → Moves forward 1 position, and the instruction becomes 2
Step 2:  2 3 4 (1) -2   // → Moves forward 2 positions, and the instruction becomes 3
Step 3:  2 3 4 2 (-2)   // → Moves forward 1 position, and the instruction becomes 2
Step 4:  2 3 (4) 2 -1   // → Moves back 2 positions, and the instruction becomes -1
Step 5:  2 3 4 2 -1     // → Moves forward 4 positions and escapes
Result: 5
```

Another example with an instruction list: **0 1 2 3 -1**

```
Start: (0) 1 2 3 -1    // → ΩMEGA starts at position 0
Step 1: (1) 1 2 3 -1   // → Stays in place but increments the instruction by 1
Step 2: 2 (1) 2 3 -1   // → Moves forward 1 position, and the instruction becomes 2
Step 3: 2 2 (2) 3 -1   // → Moves forward 1 position, and the instruction becomes 2
Step 4: 2 2 3 3 (-1)   // → Moves forward 2 positions, and the instruction becomes 3
Step 5: 2 2 3 (3) 0    // → Moves back 1 position, and the instruction becomes 0
Step 6: 2 2 3 4 0      // → Moves forward 3 positions and escapes
Result: 6
```

Another example exiting to the left: **1 -2 5**

```
Start: (1) -2 5     // → ΩMEGA starts at position 0
Step 1: 2 (-2) 5    // → Moves forward 1 position, and the instruction becomes 1
Step 2: 2 -1 5      // → Moves back 2 positions and exits to the left
Result: 2
```

Keep in mind that **if the list starts with a negative number**, ΩMEGA will exit to the left in just one step!

Access [trace.txt](./trace.txt). It contains a list of the moves made by ΩMEGA, separated by line breaks. I need you to calculate the steps ΩMEGA needed to exit **each instruction per line**, **sum all the results**, and tell me the final total number of steps ΩMEGA needed **and the result of the last line, separated by a dash.**

For example, if it took 99 steps in total, summing the steps from each line, and for the instruction on the last line it took 13 steps, the solution to submit would be **submit 99-13**
