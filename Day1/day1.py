# Find a pair with the given sum in an array
# Input:
 
# arr = [8, 7, 2, 5, 3, 1]
# sum = 10
 
# Output:
 
# Pair found (8, 2)
# or
# Pair found (7, 3)
 
# Method_1: Using Brute-Force

def findPair(Arr,sum):
    # consider each element except the last
    for i in range(0,len(Arr)-1):

        # start from the i'th element until the last element
        for j in range(i+1,len(Arr)):
            # if the desired sum is found, print it
            if Arr[i]+Arr[j]==sum:
                print("Pair found", (Arr[i], Arr[j]))
                return
    # No pair with the given sum exists in the list
    print("Pair not found")


#driver code:
if __name__ == '__main__':
    Arr=[8, 7, 2, 5, 3, 1]
    sum=10
    findPair(Arr,sum)

# time complexity = O(n^2)
