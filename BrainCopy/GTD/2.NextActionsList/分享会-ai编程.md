![[Pasted image 20250731100549.png]]

- DeadLine - 11.1
- plantime：
		- before 9.15 ：市面上的主流ai 编程大模型对现有业务的报告
		- before 10.1 ：了解市面上的 unity&unreal 的 ai 现状，探索思考 ai 编程的大前景


- learning list
	- 各大模型的使用经验
	-  [unity Ai](https://www.google.com/search?q=unity+ai&oq=unity+ai&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIHCAEQABiABDIGCAIQRRg8MgYIAxBFGEEyBggEEEUYPDIGCAUQRRg8MgYIBhBFGEEyBggHEEUYQdIBCDI1MDVqMGo3qAIIsAIB8QVmFMd_K3rJLA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:a2257d93,vid:du6S-egCx1s,st:0)

- 参考经验
	- [Getting Good Results from Claude Code](https://www.dzombak.com/blog/2025/08/getting-good-results-from-claude-code/)

- 物料
	- 逻辑设计实现
		案例 1：捕鱼游戏玩法修改
			  背景：目前玩法是，1.鱼（包括闪电道具）的数量是固定的，即消耗一只新增一只，2.鱼游泳的速度是完全随机的，玩法逻辑太单一。修改需求是，1.增加难度进阶 2、增加特殊事件，鱼群（具体玩法规则如图所示）![[rule 1.png]]
				prompt：![[Pasted image 20250814095852.png]]
				模型：claude-4.0-Sonnet
			 步骤：a.阅读代码 b.多次修正 c.运行纠错 d.完成需求
				
	- 效果实现
		