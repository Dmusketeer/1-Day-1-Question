def find_Small_Large(array):
    length = len(array)
    array.sort()
    print("Largest element is:", array[length-1])
    print("Smallest element is:", array[0])
  
  
array=[10,35,39,40,56,69,77,79,82,92]
Largest = find_Small_Large(array)