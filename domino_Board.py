n, m= map(int, input().split())
def dominoBoard(m,n):
    if(n % 2 == 0):
        return int(n/2 * m);
    else:
        return int(((n - 1)/2) * (m)) + int(m / 2)
    
print(dominoBoard(m, n))
