# Iterative python program to reverse an array
# 1) Initialize start and end indexes as start = 0, end = n-1 
# 2) In a loop, swap arr[start] with arr[end] and change start and end as follows : 
# start = start +1, end = end – 1


def reverse(A,start,end):
    while start<end:
        A[start], A[end] = A[end] ,A[start]
        start+=1
        end-=1

# driver code
A=[1,2,3,4,5]
print(A)
reverse(A,0,4)
print('reverse list is ')
print(A)



# Method 2 :
def reverseList(A):
  print( A[::-1])
     
# Driver function to test above function
A = [1, 2, 3, 4, 5, 6]
print(A)
print("Reversed list is")
reverseList(A) 