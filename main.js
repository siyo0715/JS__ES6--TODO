const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.querySelector("#add-text").value;
    document.querySelector("#add-text").value = "";

    // div生成
    const div = document.createElement("div");
    div.className = "list-row";

    // li生成
    const li = document.createElement("li");
    li.innerText = inputText;

    // divタグの子要素に各要素設計
    div.appendChild(li);

    // 未完了リストに追加
    document.querySelector("#incomplete-list").appendChild(div);
};


document
    .querySelector("#add-button")
    .addEventListener("click", () => onClickAdd());