
    <h1>您的IP地址信息</h1>
    <p>数据来源于http://myip.ipip.net</p>
    <div id="ip-info"></div>

    <script>
        // 使用 fetch API 获取 myip.ipip.net 的内容
        fetch('https://myip.ipip.net')
            .then(response => {
                // 确保响应是成功的
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text(); // 获取响应文本
            })
            .then(html => {
                // 创建一个新的 DOMParser 实例
                const parser = new DOMParser();
                // 解析获取到的 HTML 文本
                const doc = parser.parseFromString(html, "text/html");
                // 获取 myip.ipip.net 的页面内容
                const content = doc.body.innerHTML;
                // 将内容插入到你的HTML文件中
                document.getElementById('ip-info').innerHTML = content;
            })
            .catch(error => {
                // 处理错误情况
                console.error('There has been a problem with your fetch operation:', error);
            });
    </script>