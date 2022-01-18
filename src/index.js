'use strict';

//変数
const todoInput = document.getElementById('input-text-area');
const addButton = document.querySelector(".input-area button");
const completeButton = document.getElementById('completeButton');
const deleteButton = document.getElementById('deleteButton');
const backButton = document.getElementById('backButton');
const imcopleteAreaUl = document.querySelector('.incomplete-area ul');
const copleteAreaUl = document.querySelector('.complete-area ul');

//関数
//未完了TODOリストに追加する処理（「追加」ボタンと「戻す」ボタン押下時に実行される）
function incompleteTodoIns(todoText){
    const div = document.createElement('div');
    div.classList.add('list-row');

    const li = document.createElement('li');
    li.textContent = todoText;

    const completeButton = document.createElement('button');
    completeButton.id = 'completeButton';
    completeButton.textContent = '完了';
    completeButton.addEventListener('click',todoComplete);

    const deleteButton = document.createElement('button');
    deleteButton.id = 'deleteButton';
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click',function(){
        deleteRow(this);
    });

    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    imcopleteAreaUl.appendChild(div);
}

//未完了TODOを完了TODOにする（「完了」ボタン押下時に実行される）
function todoComplete(){
    const completeTodoText = this.previousElementSibling.textContent;
    deleteRow(this);

    const div = document.createElement('div');
    div.classList.add('list-row');

    const li = document.createElement('li');
    li.textContent = completeTodoText;

    const backButton = document.createElement('button');
    backButton.id = 'backButton';
    backButton.textContent = '戻す';
    backButton.addEventListener('click',function(){
        const backTodoText = this.previousElementSibling.textContent;
        deleteRow(this);
        incompleteTodoIns(backTodoText);
    });
    
    div.appendChild(li);
    div.appendChild(backButton);
    copleteAreaUl.appendChild(div);
}

//行を削除する処理（「完了」ボタン「削除」ボタン「戻す」ボタンから呼ばれ実行される）
function deleteRow(deleteTargetChild){
    const parentNode = deleteTargetChild.parentNode;
    parentNode.remove();
}

//イベント
addButton.addEventListener("click", function(){
    const addTodoText = todoInput.value;
    todoInput.value = '';
    incompleteTodoIns(addTodoText);
});
