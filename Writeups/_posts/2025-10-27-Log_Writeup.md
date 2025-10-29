---
layout: post
title: "Buffer Overflow Exploitation Walkthrough"
date: 2025-04-05 14:30:00 -0000
categories: exploitation ctf
---

In this writeup, I'll walk through exploiting a basic buffer overflow in a C binary...

## Tools Used
- gdb
- objdump
- Python pwntools

## Vulnerable Code

```c
#include <stdio.h>
#include <string.h>

void vulnerable() {
    char buffer[64];
    gets(buffer);
}

int main() {
    vulnerable();
    return 0;
}
```

## Exploitation...
