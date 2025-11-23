# Daily Dev Jokes 🤣

A fun repository for sharing developer jokes and memes! Submit an issue with "joke" in the title and your joke in the body, and it will be displayed randomly in this README.

## Today's Joke

<!--START_SECTION:dev-jokes-->
> Why do programmers prefer dark mode?
> 
> Because light attracts bugs! 🐛
> 
> — [Issue #1](https://github.com/ahmadreza-log/daily-dev-jokes/issues/1) by [@ahmadreza-log](https://github.com/ahmadreza-log)
<!--END_SECTION:dev-jokes-->

## How to Contribute

1. Go to the [Issues](https://github.com/ahmadreza-log/daily-dev-jokes/issues) page
2. Click "New Issue"
3. Select the **"🎭 Submit a Joke"** template
4. Fill in the form:
   - 🎤 **Your Hilarious Joke**: Write your best developer joke
   - 🖼️ **Meme Image URL** (optional): Add a meme image URL if you have one
   - 🌍 **Language**: Select the language of your joke
   - ✅ **Code of Conduct**: Confirm your joke follows community guidelines
5. Submit the issue!

Once your issue is closed, it will be eligible to appear in the daily joke section above! 🎉

## How It Works

This repository uses GitHub Actions to automatically update the README.md every 24 hours with a random joke from closed issues. The script:

1. Fetches all closed issues with the "joke" label (created using the joke template)
2. Parses the issue template to extract:
   - The joke text
   - Optional meme image URL
   - Language information
3. Randomly selects one joke
4. Updates the README.md between the `<!--START_SECTION:dev-jokes-->` markers with formatted content

## 🚀 Setup & Configuration Guide

### روش 1: Fork کردن Repository (پیشنهادی)

1. **Fork کردن Repository:**
   - روی دکمه "Fork" در بالای صفحه کلیک کنید
   - Repository را به حساب خودتان fork کنید

2. **Clone کردن Repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/daily-dev-jokes.git
   cd daily-dev-jokes
   ```

3. **نصب Dependencies:**
   ```bash
   npm install
   ```

4. **تست محلی (اختیاری):**
   - یک GitHub Personal Access Token بسازید از: https://github.com/settings/tokens
   - دسترسی‌های مورد نیاز: `repo` و `read:org`
   - یک فایل `.env` در root پروژه بسازید:
     ```
     GITHUB_TOKEN=your_token_here
     GITHUB_REPOSITORY_OWNER=your_username
     GITHUB_REPOSITORY=your_repo_name
     ```
   - اجرا کنید:
     ```bash
     npm run dev
     ```

### روش 2: استفاده در Repository موجود

اگر می‌خواهید این قابلیت را به یک repository موجود اضافه کنید:

#### مرحله 1: کپی کردن فایل‌ها

1. **کپی کردن فولدر `.github`:**
   ```bash
   # از این repository
   cp -r .github/ /path/to/your/repo/
   ```

2. **کپی کردن فولدر `src`:**
   ```bash
   cp -r src/ /path/to/your/repo/
   ```

3. **کپی کردن فایل‌های root:**
   ```bash
   cp package.json tsconfig.json .gitignore /path/to/your/repo/
   ```

#### مرحله 2: نصب Dependencies

```bash
cd /path/to/your/repo
npm install
```

#### مرحله 3: تنظیم GitHub Actions

1. **بررسی فایل Workflow:**
   - فایل `.github/workflows/update-joke.yml` را باز کنید
   - این فایل به صورت خودکار از environment variables استفاده می‌کند
   - نیازی به تغییر نیست مگر اینکه بخواهید زمان اجرا را تغییر دهید

2. **تنظیم زمان اجرا (اختیاری):**
   ```yaml
   schedule:
     # فرمت: دقیقه ساعت روز ماه روز_هفته
     # مثال: هر روز ساعت 12:00 UTC
     - cron: '0 12 * * *'
   ```
   
   مثال‌های دیگر:
   - هر 6 ساعت: `'0 */6 * * *'`
   - هر 12 ساعت: `'0 */12 * * *'`
   - هر هفته: `'0 0 * * 0'` (یکشنبه‌ها)
   - هر ماه: `'0 0 1 * *'` (اول هر ماه)

#### مرحله 4: تنظیم Issue Templates

1. **کپی کردن Issue Templates:**
   ```bash
   cp -r .github/ISSUE_TEMPLATE/ /path/to/your/repo/.github/
   ```

2. **سفارشی‌سازی Template (اختیاری):**
   - فایل `.github/ISSUE_TEMPLATE/joke.yml` را باز کنید
   - می‌توانید فیلدها، زبان‌ها، یا validation ها را تغییر دهید

#### مرحله 5: اضافه کردن Markers به README

در فایل `README.md` خودتان، بخش زیر را اضافه کنید:

```markdown
## Today's Joke

<!--START_SECTION:dev-jokes-->
<!--END_SECTION:dev-jokes-->
```

**مهم:** این markers باید دقیقاً به همین صورت باشند تا script بتواند آن‌ها را پیدا کند.

#### مرحله 6: فعال‌سازی GitHub Actions

1. **بررسی Permissions:**
   - به Settings → Actions → General بروید
   - مطمئن شوید که "Workflow permissions" روی "Read and write permissions" تنظیم شده باشد

2. **اجرای دستی (برای تست):**
   - به تب "Actions" در repository بروید
   - workflow "Update Daily Joke" را انتخاب کنید
   - روی "Run workflow" کلیک کنید
   - اگر همه چیز درست باشد، README به‌روزرسانی می‌شود

#### مرحله 7: ایجاد اولین Issue

1. به صفحه Issues بروید
2. "New Issue" را کلیک کنید
3. Template "🎭 Submit a Joke" را انتخاب کنید
4. فرم را پر کنید و submit کنید
5. Issue را close کنید (بعد از close شدن، در لیست جوک‌ها قرار می‌گیرد)

### 🔧 تنظیمات پیشرفته

#### تغییر Repository Owner/Name

اگر repository name یا owner متفاوت است، می‌توانید در workflow file تغییر دهید:

```yaml
env:
  GITHUB_REPOSITORY: ${{ github.repository }}  # به صورت خودکار
  GITHUB_REPOSITORY_OWNER: ${{ github.repository_owner }}  # به صورت خودکار
```

یا اگر می‌خواهید repository دیگری را استفاده کنید:

```yaml
env:
  GITHUB_REPOSITORY: owner/repo-name
  GITHUB_REPOSITORY_OWNER: owner
```

#### استفاده از Personal Access Token

اگر می‌خواهید از repository دیگری استفاده کنید:

1. یک Personal Access Token بسازید
2. به Settings → Secrets and variables → Actions بروید
3. یک secret جدید با نام `GITHUB_TOKEN` اضافه کنید
4. در workflow file:
   ```yaml
   env:
     GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
   ```

#### تغییر Label

اگر می‌خواهید از label دیگری به جای "joke" استفاده کنید:

1. در `.github/ISSUE_TEMPLATE/joke.yml`:
   ```yaml
   labels: 
     - "your-custom-label"
   ```

2. در `src/services/github.service.ts`:
   ```typescript
   labels: 'your-custom-label',
   ```

### 🧪 تست کردن

#### تست محلی:

```bash
# نصب dependencies
npm install

# ساخت .env file
echo "GITHUB_TOKEN=your_token" > .env
echo "GITHUB_REPOSITORY_OWNER=your_username" >> .env
echo "GITHUB_REPOSITORY=your_repo" >> .env

# اجرا
npm run dev
```

#### تست در GitHub Actions:

1. به Actions tab بروید
2. workflow را manually trigger کنید
3. لاگ‌ها را بررسی کنید
4. README را چک کنید که به‌روزرسانی شده باشد

### ❓ مشکلات رایج

**مشکل:** README به‌روزرسانی نمی‌شود
- ✅ مطمئن شوید markers در README وجود دارند
- ✅ مطمئن شوید workflow اجرا شده است
- ✅ لاگ‌های GitHub Actions را بررسی کنید

**مشکل:** "No joke issues found"
- ✅ مطمئن شوید issue با label "joke" وجود دارد
- ✅ مطمئن شوید issue closed شده است
- ✅ مطمئن شوید issue از template استفاده کرده است

**مشکل:** Build fails
- ✅ مطمئن شوید Node.js version 20+ نصب است
- ✅ `npm install` را دوباره اجرا کنید
- ✅ TypeScript errors را بررسی کنید

### 📚 منابع بیشتر

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Issue Templates Guide](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository)
- [Octokit Documentation](https://octokit.github.io/rest.js/)

## 📄 License

ISC

