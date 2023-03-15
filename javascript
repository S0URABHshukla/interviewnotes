=> Everything in javascripts happens inside an execution context.
=> Javascripts is synchronous single-threaded language.
=> Call stack maintains the order of execution of execution context.
=> In execution context there are two phase:
   (1) Memory Creation : 
       In M.C everthing store in Key, Value pair.
       in variable case it allocate some memory to that and assign undefind value to it,
       in function it store all the code as it.
   (2) Code Execution :
       In C.E execute the code and assign the value.
=>  Hoisting is a JavaScript mechanism where variables and function declarations are moved to the  top of their scope
    before the code is executed. This means that even if a variable or function is declared later in the code, it can 
    be used before its actual declaration.
=>  Temporal Dead Zone (TDZ) is a term used in the context of variable hoisting in JavaScript. When a variable is
    declared using the keyword 'let' or 'const' in JavaScript, it is not accessible until it has been declared and initialized. The TDZ is the period between the start of a block and the point where a variable is declared and initialized. During this period, any attempt to access the variable will result in a ReferenceError. The TDZ helps enforce the use of best coding practices and helps catch potential bugs before they can cause problems in your code.    
           