

'''
Author      : babybus
Date        : 2025-07-22 14:20:43
LastEditors : guobiao
LastEditTime: 2025-07-22 14:21:21
FilePath    : encrypted.py
Description : 

Copyright (c) 2011-2025  baby-bus.com. 
'''

import fitz  # PyMuPDF
import os

def protected_pdf_to_images(pdf_path, password, output_folder):
    try:
        # 打开加密的PDF文件
        pdf_document = fitz.open(pdf_path)
        
        # 如果PDF需要密码
        if pdf_document.is_encrypted:
            # 尝试用提供的密码解密
            if not pdf_document.authenticate(password):
                raise ValueError("提供的密码不正确或无法解密PDF")
        
        # 创建输出文件夹
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)
        
        # 遍历每一页
        for page_num in range(len(pdf_document)):
            page = pdf_document.load_page(page_num)
            pix = page.get_pixmap(dpi=300)  # 设置DPI为300
            
            # 保存为PNG图片
            output_path = os.path.join(output_folder, f"page_{page_num + 1}.png")
            pix.save(output_path)
        
        print(f"转换完成，图片保存在: {output_folder}")
    
    except Exception as e:
        print(f"发生错误: {str(e)}")
    finally:
        pdf_document.close()

# 使用示例
protected_pdf_to_images("encrypted.pdf", "888427", "output_images")