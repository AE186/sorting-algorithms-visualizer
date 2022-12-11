import random

file = "Big File.txt"
n = 100000
start = 0
end = 85

arr = []
for i in range(n):
    arr.append(random.randrange(start, end, 1))
    
arr = [str(i) for i in arr]
with open(file, 'w') as f:
    f.write(' '.join(arr))
