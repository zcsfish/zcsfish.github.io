 
#include <cstdlib>

int main() {
    // 执行 'git add .' 命令
    system("git add .");

    // 执行 'git commit -m "修改文件"' 命令
    system("git commit -m \"$修改文件(date +%Y-%m-%d %H:%M)\"");

    // 执行 'git push -u origin main' 命令
    system("git push -u origin main");

    return 0;
}
 