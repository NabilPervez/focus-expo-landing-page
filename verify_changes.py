from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)

    # iPhone 12 Pro dimensions for mobile testing
    iphone_12_pro = playwright.devices['iPhone 12 Pro']
    context_mobile = browser.new_context(**iphone_12_pro)
    page_mobile = context_mobile.new_page()

    # Desktop context
    context_desktop = browser.new_context(viewport={'width': 1280, 'height': 800})
    page_desktop = context_desktop.new_page()

    try:
        # 1. Verify Mobile Text Overflow
        print("Navigating to mobile page...")
        page_mobile.goto("http://localhost:5173")
        page_mobile.wait_for_load_state("networkidle")

        # Scroll to "The Answers You Have Been" section
        # It's in the About section.
        try:
            page_mobile.locator("text=The Answers You Have Been").scroll_into_view_if_needed()
            page_mobile.wait_for_timeout(500)
            page_mobile.screenshot(path="verification_mobile_text.png")
            print("Captured verification_mobile_text.png")
        except Exception as e:
            print(f"Error finding/scrolling to mobile text: {e}")
            page_mobile.screenshot(path="verification_mobile_text_error.png")


        # 2. Verify Mobile Navbar Close Button
        # Open the navbar
        print("Opening mobile navbar...")
        try:
            # Refresh to ensure clean state or scroll back up? Navbar is fixed so it should be fine.
            # But "The Answers..." is down the page. Navbar is fixed.
            page_mobile.evaluate("window.scrollTo(0, 0)")
            page_mobile.wait_for_timeout(500)

            page_mobile.click(".hamburger-menu")
            page_mobile.wait_for_selector(".card-nav-content")
            # Wait a bit for animation
            page_mobile.wait_for_timeout(1000)
            page_mobile.screenshot(path="verification_mobile_navbar.png")
            print("Captured verification_mobile_navbar.png")
        except Exception as e:
            print(f"Error interacting with mobile navbar: {e}")
            page_mobile.screenshot(path="verification_mobile_navbar_error.png")


        # 3. Verify Desktop Navbar Height
        print("Navigating to desktop page...")
        page_desktop.goto("http://localhost:5173")
        page_desktop.wait_for_load_state("networkidle")

        # Open navbar
        print("Opening desktop navbar...")
        try:
            page_desktop.click(".hamburger-menu")
            page_desktop.wait_for_selector(".card-nav-content")
            page_desktop.wait_for_timeout(1000)
            page_desktop.screenshot(path="verification_desktop_navbar.png")
            print("Captured verification_desktop_navbar.png")
        except Exception as e:
            print(f"Error interacting with desktop navbar: {e}")
            page_desktop.screenshot(path="verification_desktop_navbar_error.png")


        # 4. Verify Secure Your Spot Spacing
        # Scroll to "Secure Your Spot"
        print("Scrolling to CTA...")
        try:
            page_desktop.locator("text=Secure Your Spot").scroll_into_view_if_needed()
            page_desktop.wait_for_timeout(500)
            page_desktop.screenshot(path="verification_desktop_cta.png")
            print("Captured verification_desktop_cta.png")
        except Exception as e:
            print(f"Error finding/scrolling to CTA: {e}")
            page_desktop.screenshot(path="verification_desktop_cta_error.png")


    except Exception as e:
        print(f"Global Error: {e}")
    finally:
        browser.close()

if __name__ == "__main__":
    with sync_playwright() as playwright:
        run(playwright)
