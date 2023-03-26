[View code on GitHub](https://github.com/solana-labs/solana/blob/master/scripts/oom-score-adj.sh)

The `oom_score_adj.sh` script is a Linux-specific script that adjusts the OOM (Out of Memory) score for a specified process. The purpose of this script is to allow the user to adjust the OOM score of a process to prevent it from being killed by the Linux kernel when the system runs out of memory.

The script takes two arguments: the first argument is the process ID (PID) of the process whose OOM score needs to be adjusted, and the second argument is the new OOM score that needs to be set for the process. The script first checks if the system is running on Linux, and if not, it returns without doing anything.

If the system is running on Linux, the script sets the new OOM score for the specified process by writing the new score to the `/proc/[pid]/oom_score_adj` file. If the write operation fails, the script continues without raising an error. The script then reads the current OOM score of the process from the same file and compares it with the new score that was set. If the current score is not equal to the new score, the script prints an error message indicating that the new score was not set.

This script can be used in the larger Solana project to adjust the OOM score of Solana processes running on Linux systems. For example, if a Solana validator process is running on a Linux system with limited memory, the user can use this script to adjust the OOM score of the validator process to prevent it from being killed by the Linux kernel when the system runs out of memory.

Example usage:

```
$ oom_score_adj 1234 100
```

This command sets the OOM score of the process with PID 1234 to 100.
## Questions: 
 1. What is the purpose of this script?
    
    This script adjusts the OOM (Out of Memory) score for a specified process on Linux systems.

2. What are the parameters for the `oom_score_adj` function?
    
    The `oom_score_adj` function takes two parameters: `pid` (the process ID of the process to adjust) and `score` (the new OOM score to set).

3. What happens if the script is run on a non-Linux system?
    
    If the script is run on a non-Linux system, the `oom_score_adj` function will return without doing anything.