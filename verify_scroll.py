from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 390, 'height': 844}) # iPhone 12 Pro

    try:
        page.goto("http://localhost:5173")
        page.wait_for_load_state("networkidle")

        # Take a screenshot of the top of the page
        page.screenshot(path="verification_mobile_top.png")
        print("Captured verification_mobile_top.png")

        # Scroll down a bit
        page.evaluate("window.scrollTo(0, 500)")
        page.wait_for_timeout(500)
        page.screenshot(path="verification_mobile_scrolled.png")
        print("Captured verification_mobile_scrolled.png")

    except Exception as e:
        print(f"Error: {e}")
    finally:
        browser.close()

if __name__ == "__main__":
    with sync_playwright() as playwright:
        run(playwright)
