
function main() {
    array= initialArray();
    console.log("esercizio n. 1 risultato = " + search(array));
    console.log("esercizio n. 2 risultato = " + squareOfPowOfEven(array));
    console.log("esercizio n. 3 risultato = " + evaluateExpr(calcola));
    var albero = new BST();
    caricaAlbero(albero, initialArray());
    console.log("esercizio n. 4 risultato = " + maxTree(albero.root));
}





function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}

// ricerca ricorsiva 

function search(e) { 
    if(e.length == 0) { 
        return 0; 
    } else { 
        if(e[0]==5070) { 
            return search(e.slice(1)) + 1; 
        } else {
            return search(e.slice(1)) + 0;
        }
    } 
}


//esercizio della radice quadrata della potenza dei numeri pari


function squareOfPowOfEven(e) {
    return Math.sqrt(array.filter(function(x) {
        return x >= 0 && x % 2 == 0;
    }).map(function(x) {
        return x * x;
    }).reduce(function(acc, x) {
        return acc + x;
    }))
}

  
//implemento stack


function Stack() {
    this.myarray = [];
}

Stack.prototype.push = function(e) {
    this.myarray.push(e);
}

Stack.prototype.pop = function() {
    return this.myarray.pop();
}

Stack.prototype.peek = function() {
    return this.myarray[this.myarray.length - 1];
}

Stack.prototype.isEmpty = function() {
    if (this.myarray.length == 0) {
        return true;
    } else {
        return false;
    }
}


//esercizio sullo Stack


function calcola(e)  {
    e = e.split(" "); 
    var num = new Stack();
    var op = new Stack();
    while(e.length>0) {        
        tmp = e[0];
        switch(tmp) {
            case '+':
                    op.push(tmp);
                    break;

            case '-':
                    op.push(tmp);
                    break;

            case '*':
                    op.push(tmp);
                    break;

            case '/':
                    op.push(tmp);
                    break;

            case ')':
                    num2 = num.pop();
                    num1 = num.pop();
                    oper = op.pop();
                    switch(oper) {
                        case '+':
                                num1 = parseInt(num1) + parseInt(num2);
                                num.push(num1);
                                break;
                        case '*' :
                                num1 = parseInt(num1) * parseInt(num2);
                                num.push(num1);
                                break;
                        case '-' :
                                num1 = parseInt(num1) - parseInt(num2);
                                num.push(num1);
                                break;
                        case '/' :
                                num1 = parseInt(num1) / parseInt(num2);
                                num.push(num1);
                                break;
                          
                    }
                    break;
            case '(' :
                    break;

            default:
                num.push(tmp);
                break;
        }
        e = e.slice(1);

    }
    return num.pop();
}

var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
	return callback(_0xd10d[0]);
}


//esercizio ricerca del maggiore in un albero


function Node(i, left, right) {
    this.item = i;
    this.l = left;
    this.r = right;
}

function BST() {
    this.root = null;

}

BST.prototype.addNode = function(currentNode, newNode) {
    if (newNode.item < currentNode.item) {
        if (currentNode.l == null)
            currentNode.l = newNode;
        else
            this.addNode(currentNode.l, newNode);
    } else {
        if (currentNode.r == null)
            currentNode.r = newNode;
        else
            this.addNode(currentNode.r, newNode);
    }
}

BST.prototype.add = function(item) {
    if (this.root == null) {
        this.root = new Node(item, null, null);
    } else {
        this.addNode(this.root, new Node(item, null, null));
    }
}

function caricaAlbero(tree, array) {
    for(var i = 0;i < array.length;i++) {
        tree.add(array[i]);
    }
}

function maxTree(root) {
    if (root == null)
        return 0;
    else if (root.r == null)
        return root.item;
    else
        return maxTree(root.r);
}
